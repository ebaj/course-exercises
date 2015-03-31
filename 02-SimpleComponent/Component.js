jQuery.sap.declare("qmacro.Component");
sap.ui.core.UIComponent.extend("qmacro.Component", {
	metadata : {
		name : "Simple Component",
		dependencies : {
			libs : ["sap.m"]
		}
	},


	createContent : function() {

		// Input field
		var oInput = new sap.m.Input("name", {
			placeholder : "What is your name?"
		});

		// Button with action
		var oButton = new sap.m.Button({
			text : "Greeting",
			press : function(oEvent) {
				var sName = sap.ui.getCore().byId("name").getValue();
				jQuery.sap.require("sap.m.MessageBox");
				sap.m.MessageBox.alert("Hello, " + sName);
			}
		});

		return new sap.m.VBox({
			items : [
				oInput,
				oButton
			]
		});

	}
});
