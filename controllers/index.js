const RegisterController = require('./AuthControllers/RegisterController')
const LoginController = require('./AuthControllers/LoginController')
const LogoutController = require('./AuthControllers/LogoutController')
const AddProductController = require('./ProductsContollers/AddProductController')
const GetAllProductsController = require('./ProductsContollers/GetAllProductsController')
const GetProductByIdController = require('./ProductsContollers/GetProductByIdController')
const DeleteProductController = require('./ProductsContollers/DeleteProductController')
const UpdateProductcontroller = require('./ProductsContollers/UpdateProductController')
const CreateBillController =require('./BillControllers/CreateBillController')
const DisplayBillController =require('./BillControllers/DisplayBillController')

module.exports = {
  RegisterController,
  LoginController,
  LogoutController,
  AddProductController,
  GetAllProductsController,
  GetProductByIdController,
  DeleteProductController,
  UpdateProductcontroller,
  CreateBillController,
  DisplayBillController

}