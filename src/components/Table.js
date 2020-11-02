import React, { useState, useMemo, useEffect } from "react";
import $ from "jquery";

const searchFilter = () => {
  var showResults;
  $("#search-box").keyup(function () {
    var searchText;
    searchText = $("#search-box").val();
    return showResults(searchText);
  });
  showResults = function (searchText) {
    $("tbody tr").hide();
    return $("tbody tr:Contains(" + searchText + ")").show();
  };
  $.expr[":"].Contains = $.expr.createPseudo(function (arg) {
    return function (elem) {
      return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    };
  });
};

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = useState(config);

  const sortedItems = useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const Table = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.products);

  useEffect(() => {
    searchFilter();
  }, []);

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <div>
      <input
        id="search-box"
        className="light-table-filter"
        data-table="order-table"
        type="search"
        placeholder="Filter Table..."
      />
      <table id="table">
        <caption>Products</caption>
        <thead>
          <tr>
            <th>
              <div
                onClick={() => requestSort("fullName")}
                className={getClassNamesFor("fullName")}
                style={{ cursor: "pointer" }}
              >
                <span>fullName</span>
                <i
                  className="fa fa-fw fa-sort"
                  style={{ float: "right", opacity: "0.7" }}
                ></i>
              </div>
            </th>
            <th>
              <div
                onClick={() => requestSort("balance")}
                className={getClassNamesFor("balance")}
                style={{ cursor: "pointer" }}
              >
                <span>balance</span>
                <i
                  className="fa fa-fw fa-sort"
                  style={{ float: "right", opacity: "0.7" }}
                ></i>
              </div>
            </th>
            <th>
              <div
                onClick={() => requestSort("isActive")}
                className={getClassNamesFor("isActive")}
                style={{ cursor: "pointer" }}
              >
                <span>isActive</span>
                <i
                  className="fa fa-fw fa-sort"
                  style={{ float: "right", opacity: "0.7" }}
                ></i>
              </div>
            </th>
            <th>
              <div
                onClick={() => requestSort("registered")}
                className={getClassNamesFor("registered")}
                style={{ cursor: "pointer" }}
              >
                <span>registered</span>
                <i
                  className="fa fa-fw fa-sort"
                  style={{ float: "right", opacity: "0.7" }}
                ></i>
              </div>
            </th>
            <th>
              <div
                onClick={() => requestSort("state")}
                className={getClassNamesFor("state")}
                style={{ cursor: "pointer" }}
              >
                <span>state</span>
                <i
                  className="fa fa-fw fa-sort"
                  style={{ float: "right", opacity: "0.7" }}
                ></i>
              </div>
            </th>
            <th>
              <div
                onClick={() => requestSort("country")}
                className={getClassNamesFor("country")}
                style={{ cursor: "pointer" }}
              >
                <span>country</span>
                <i
                  className="fa fa-fw fa-sort"
                  style={{ float: "right", opacity: "0.7" }}
                ></i>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.fullName}</td>
              <td>${item.balance}</td>
              <td>{item.isActive}</td>
              <td>{item.registered}</td>
              <td>{item.state}</td>
              <td>{item.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
