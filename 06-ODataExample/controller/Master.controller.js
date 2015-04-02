jQuery.sap.require("qmacro.util.Base");

qmacro.util.Base.extend("qmacro.controller.Master", {
	onItemSelected : function(oEvent) {
		var oSelected = oEvent.getParameter("listItem") || oEvent.getSource();
		var sPath = oSelected.getBindingContext().getPath();
		this.navTo("detail", {
			productPath : sPath.substr(1)
		});
	},

	onSearch : function (oEvent) {

		// create model filter
		var aFilters = [];
		var sQuery = oEvent.getParameter("query");
		if (sQuery && sQuery.length > 0) {
			var oFilter = new sap.ui.model.Filter("ProductName", sap.ui.model.FilterOperator.Contains, sQuery);
			aFilters.push(oFilter);
		}

		// update list binding
		var oList = this.getView().byId("list");
		var oBinding = oList.getBinding("items");
		oBinding.filter(aFilters);

	}

});
