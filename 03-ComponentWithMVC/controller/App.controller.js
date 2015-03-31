sap.ui.controller("qmacro.controller.App", {

	onGreetingPress : function(oEvent) {
		jQuery.sap.require("sap.m.MessageBox");
		var sName = this.getView().byId("name").getValue();
		sap.m.MessageBox.alert("Hello, " + sName);
	}

})
