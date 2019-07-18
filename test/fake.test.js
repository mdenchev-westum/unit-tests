'use strict';

let assert = require('chai').assert;
let sinon = require('sinon');

describe('fake test', function () {
	it('should create a new product and call getName', function () {
		let DataProvider = require('../app/DataProvider');

		let fakeData = sinon.fake.returns({
			name: 'Product name',
			price: 9.99
		});

		let dataProviderStub = sinon.createStubInstance(DataProvider, {
			extract: sinon.stub().returns(fakeData())
		});

		let stockDummy = {
			update: function() {
				// don't care
			}
		}
		
		let Product = require('../app/Product');
		let product = new Product(dataProviderStub, stockDummy);

		let name = product.getName();

		assert.equal(name, 'Product name', 'product name is correctly extracted from the dataProvider');
	});

	it('should call dataProvider.extract', function () {

		let DataProvider = require('../app/DataProvider');
		let dataProvider = new DataProvider();

		var mock = sinon.mock(dataProvider);
		mock.expects("extract").once();

		let stockDummy = {
			update: function() {
				// don't care
			}
		}

		let Product = require('../app/Product');
		let product = new Product(dataProvider, stockDummy);

		mock.verify();
		mock.restore();
	});

	it('should call update quantity', function () {
		let DataProvider = require('../app/DataProvider');

		let fakeData = sinon.fake.returns({
			name: 'Product name',
			price: 9.99
		});

		let dataProviderStub = sinon.createStubInstance(DataProvider, {
			extract: sinon.stub().returns(fakeData())
		});

		let spy = sinon.spy();

		let stockDummy = {
			update: spy
		}
		
		let Product = require('../app/Product');
		let product = new Product(dataProviderStub, stockDummy);

		let args = stockDummy.update.args;

		assert.equal(stockDummy.update.called, true);
	});
});