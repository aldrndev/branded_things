const errorHandler = (error, req, res, next) => {
  let statusCode = 500;
  let message = 'Internal Server Error';

  if (error.message === 'notfoundcategory') {
    statusCode = 404;
    message = 'Tidak ada Category yang ditemukan';
  }

  if (error.name === 'SequelizeValidationError') {
    statusCode = 400;
    message = error.errors.map((el) => {
      return el.message;
    });
  }

  if (error.message === 'notfoundproduct') {
    statusCode = 404;
    message = 'Tidak ada Product yang ditemukan';
  }

  if (error.message === 'notfoundproductdetail') {
    statusCode = 404;
    message = 'Product detail tidak di temukan';
  }

  if (error.message === 'notfounddeleteproduct') {
    statusCode = 404;
    message = 'Product yang di hapus tidak di temukan';
  }

  if (error.message === 'Unauthorized' || error.name === 'JsonWebTokenError') {
    statusCode = 401;
    message = 'Please login first';
  }

  if (error.message === 'Forbidden') {
    statusCode = 403;
    message = 'You dont have access';
  }

  if (
    error.message === 'user_not_found' ||
    error.message === 'invalid_password'
  ) {
    statusCode = 401;
    message = 'Username/Password Salah';
  }

  res.status(statusCode).json({
    statusCode,
    message,
  });
};

module.exports = errorHandler;
