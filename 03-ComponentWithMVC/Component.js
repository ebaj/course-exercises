jQuery.sap.declare("qmacro.Component");
sap.ui.core.UIComponent.extend("qmacro.Component", {
	metadata : {
		name : "Component with MVC",
		dependencies : {
			libs : ["sap.m"]
		}
	},


	createContent : function() {

		return sap.ui.view({
			viewName : "qmacro.view.App",
			type : sap.ui.core.mvc.ViewType.XML
		});

	}
});
