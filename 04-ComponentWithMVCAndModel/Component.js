jQuery.sap.declare("qmacro.Component");
sap.ui.core.UIComponent.extend("qmacro.Component", {
	metadata : {
		name : "Component with MVC and Model",
		dependencies : {
			libs : ["sap.m"]
		}
	},


	createContent : function() {

		var oModel = new sap.ui.model.json.JSONModel();
		var oView = sap.ui.view({
			viewName : "qmacro.view.App",
			type : sap.ui.core.mvc.ViewType.XML
		});
		oView.setModel(oModel);
		return oView;

	}
});
