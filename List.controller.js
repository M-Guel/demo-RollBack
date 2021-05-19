sap.ui.define([
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel'
	], function(Controller, JSONModel) {
	"use strict";

	var ListController = Controller.extend("sap.m.sample.StandardListItem.List", {

		onInit : function (evt) {

			// set explored app's demo model on this sample
			var oModel = new JSONModel(sap.ui.require.toUrl("sap/ui/demo/mock/products.json"));
			this.getView().setModel(oModel);

			// Change 1 : creating a variable
			var oValue = ""; 

			// Change 2 : setting a value into the variable
			oValue = "This is a change for Rollback";

			// Change 3 : using the variable
			this.getView().getModel().setData(oValue);
			
			// Change 4 : creating an unrelated variable
			var oTemp = ""; 
			
			// Change 5 : creating another variable by M-Guel SAP GitHub Account
			var oTempSAP = "";
		}
	});


	return ListController;

});
