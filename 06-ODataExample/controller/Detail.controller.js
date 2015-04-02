jQuery.sap.require("qmacro.util.Base");

qmacro.util.Base.extend("qmacro.controller.Detail", {

	onInit : function() {
		this.getRouter().attachRouteMatched(this.onRouteMatched, this);
	},

	onRouteMatched : function(oEvent) {
		var oParameters = oEvent.getParameters();
		if (oParameters.name !== "detail") {
			return;
		}

		// when detail navigation occurs, update the binding context
		this.getView().bindElement("/" + oParameters.arguments.productPath);
	},

	onBack : function() {
		this.navBack();
	},

	showFirstProduct : function () {
		var oModel = this.getView().getModel();
		var oData = oModel.getData("/");
		for (var sProperty in oData) {
			var oEntry = oData[sProperty];
			if (oEntry && jQuery.sap.startsWith(sProperty, "Products")) {
				this.getView().bindElement("/" + sProperty);
				return;
			}
		}
	}

});
