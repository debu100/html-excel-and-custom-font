$(document).ready(function () {
  function exportexcel() {
    $("#mytable").table2excel({
      name: "Table2Excel",
      filename: "myFileName",
      fileext: ".xls",
    });
  }

  const btn = $("button");

  btn.on("click", () => {
    exportexcel();
  });
});

//? extract employee details in an excel sheet
