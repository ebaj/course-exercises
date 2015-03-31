jQuery.sap.declare("qmacro.Component");
sap.ui.core.UIComponent.extend("qmacro.Component", {
	metadata : {
		name : "Component with MVC and Model and Formatter",
		includes: [
			"css/styles.css"
		],
		dependencies : {
			libs : ["sap.m"]
		}
	},


	createContent : function() {

		var oModel = new sap.ui.model.json.JSONModel({
			info : {
				now : new Date(),
				pi : 22/7
			}
		});
		var oView = sap.ui.view({
			viewName : "qmacro.view.App",
			type : sap.ui.core.mvc.ViewType.XML
		});
		oView.setModel(oModel);
		return oView;

	}
});
