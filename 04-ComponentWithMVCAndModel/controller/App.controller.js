sap.ui.controller("qmacro.controller.App", {

	onGreetingPress : function(oEvent) {
		jQuery.sap.require("sap.m.MessageBox");
		var oModel = this.getView().getModel();
		sap.m.MessageBox.alert("Hello, " + oModel.getProperty("/name"));
	}

})
