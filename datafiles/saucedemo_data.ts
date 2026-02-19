class SauceDemoData {
  public static readonly BASE_URL = 'https://www.saucedemo.com/';

  public static readonly VALID_USERNAME = 'standard_user';
  public static readonly VALID_PASSWORD = 'secret_sauce';

  public static readonly LOCKED_USER = 'locked_out_user';
  
  public static readonly INVALID_USERNAME = 'invalid_user';
  public static readonly INVALID_PASSWORD = 'wrong_password';

  // Performance glitch user (slower load times)
  public static readonly PERFORMANCE_GLITCH_USER = 'performance_glitch_user';

  // Problem user (UI display issues)
  public static readonly PROBLEM_USER = 'problem_user';

  // Test product data
  public static readonly PRODUCTS = {
    BACKPACK: {
      name: 'Sauce Labs Backpack',
      price: '$29.99'
    },
    BIKE_LIGHT: {
      name: 'Sauce Labs Bike Light',
      price: '$9.99'
    },
    BOLT_T_SHIRT: {
      name: 'Sauce Labs Bolt T-Shirt',
      price: '$15.99'
    },
    FLEECE_JACKET: {
      name: 'Sauce Labs Fleece Jacket',
      price: '$49.99'
    },
    ONESIE: {
      name: 'Sauce Labs Onesie',
      price: '$7.99'
    },
    T_SHIRT: {
      name: 'Test.allTheThings() T-Shirt (Red)',
      price: '$15.99'
    }
  };

  
  public static readonly ERROR_INVALID_CREDENTIALS = 'Epic sadface: Username and password do not match any user in this service';
  public static readonly ERROR_LOCKED_OUT = 'Epic sadface: Sorry, this user has been locked out.';
  public static readonly ERROR_REQUIRED_USERNAME = 'Epic sadface: Username is required';
  public static readonly ERROR_REQUIRED_PASSWORD = 'Epic sadface: Password is required';
}

export { SauceDemoData };
