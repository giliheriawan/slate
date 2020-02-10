# Library - Integration


## Library
We have multiple programming language for library integration to NicePay, please check below:

Library | Download Professional V1 | Download Enterprise V1 | Download API V2
-------------- | -------------- | -------------- | --------------
PHP | [download](./file/nicepay-library-php-professional.zip) | [download](./file/nicepay-library-php-enterprise.zip) | -
python | [download](./file/nicepay-library-python-professional.zip) | [download](./file/nicepay-library-python-enterprise.zip) | [download](./file/nicepay-library-python-enterprise-v2.7z)
java | [download](./file/nicepay-library-java-professional.zip) | [download](./file/nicepay-library-java-enterprise.zip) | - 
csharp | [download](./file/nicepay-library-csharp-professional.zip) | [download](./file/nicepay-library-csharp-enterprise.zip) | -
ruby | [link](https://rubygems.org/gems/nicepay/versions/0.1.4) | - | -
Laravel | - | [download](./file/nicepay-library-laravel-enterprise-v1.zip) | -
Code Igniter | [download](./file/nicepay-library-ci-profesional-v1.zip) | [download](./file/nicepay-library-ci-enterprise-v1.zip) | [download](./file/nicepay-library-ci-enterprise-v2.zip)

## Plugin Integration

<div class="row integration-opt">
    <li class="col-6 col-md-4 col-lg-2 col-xl-2 integrated pt-2 pb-2" data-target="magento"><img src="./images/logo-magento.png" class="img-fluid"></li>
    <li class="col-6 col-md-4 col-lg-2 col-xl-2 integrated pt-2 pb-2" data-target="woocommerce"><img src="./images/logo-woocommerce.png" class="img-fluid"></li>
    <li class="col-6 col-md-4 col-lg-2 col-xl-2 integrated pt-2 pb-2" data-target="opencart"><img src="./images/logo-opencart.png" class="img-fluid"></li>
    <li class="col-6 col-md-4 col-lg-2 col-xl-2 integrated pt-2 pb-2" data-target="prestashop"><img src="./images/logo-prestashop.png" class="img-fluid"></li>
    <li class="col-6 col-md-4 col-lg-2 col-xl-2 integrated pt-2 pb-2" data-target="whmcs"><img src="./images/logo-whmcs.png" class="img-fluid"></li>
</div>

<div class="row tabsec pt-3">
    <div class="col" id="magento" title="tab" style="display:block">
        <div class="card">
            <div class="card-header">
                NICEPay Magento 1.9 Installation
            </div>
            <div class="card-body">
                <p class="card-text">
                    <ol>
                        <li>Copy-paste NICEPay magento module extension to store folder</li>
                        <li>Login to magento admin page</li>
                        <li>Click menu system <i class="fas fa-arrow-right"></i> Configuration</li>
                        <li>Click menu Sales <i class="fas fa-arrow-right"></i> Payment Method. Please check if NICEPay module already show in payment methods list</li>
                        <li>Click menu System <i class="fas fa-arrow-right"></i> Cache Management, click Select All <i class="fas fa-arrow-right"></i> Submit, Please wait until the page automatically refresh, and then click Flush Cache Storage and wait until page automatically refresh</li>
                        <li>Click menu System <i class="fas fa-arrow-right"></i> Index Management. Click Select All <i class="fas fa-arrow-right"></i> submit</li>
                        <li>For checking payment installation, open front-end page , and then process checkout, choose Nicepay payment method, follow next intructions untill finish.</li>
                        <li>For checking all transactions process, login to page admin , click menu Sales <i class="fas fa-arrow-right"></i> Order</li>
                    </ol>
                </p>
            </div>
            <div class="card-footer">
                <a href="./file/nicepay-module-magento-1.9-api-v1.zip">magento 1.9 API V1</a>
            </div>
        </div>
    </div>
    <div class="col" id="woocommerce" title="tab">
        <div class="card">
            <div class="card-header">
                NICEPay Woocommerce Installation
            </div>
            <div class="card-body">
                <p class="card-text">
                    <ol>
                        <li>Login to Woocommerce Admin</li>
                        <li>Click menu plugin</li>
                        <li>Upload NICEPay Woocommerce plugin</li>
                        <li>Click tab installed plugin, activate the plugin</li>
                        <li>Add NICEpay payment in payment method, click menu Woocommerce</li>
                        <li>Click Setting, then click tab Checkout</li>
                        <li>Input MID and Merchant Key</li>
                        <li>Ready to Accept Transaction</li>
                    </ol>
                </p>
            </div>
            <div class="card-footer">
                <a href="./file/nicepay-module-woocommerce-api-v1.zip">Woocommerce API V1</a> - 
                <a href="./file/nicepay-module-woocommerce-api-v2.zip">Woocommerce API V2</a>
            </div>
        </div>
    </div>
    <div class="col" id="opencart" title="tab">
        <div class="card">
            <div class="card-header">
                NICEPay OpenCart 3.0 Installation
            </div>
            <div class="card-body">
                <p class="card-text">
                    <ol>
                        <li>Copy-paste Opencart Nicepay modules extension to Merchant folder (note folder structure copy paste)</li>
                        <li>Login to Opencart Admin page</li>
                        <li>Click Menu Extensions</li>
                        <li>Click sub Menu Extensions</li>
                        <li>Choose Payment in combo box menu</li>
                        <li>The payment list will appears, select Nicepay payment method and click install</li>
                        <li>Click pencil image edit <i class="fas fa-arrow-right"></i> click tab General dan fill MID dan Merchant Key, then save</li>
                        <li>Nicepay Payment already to use</li>
                    </ol>
                </p>
            </div>
            <div class="card-footer">
                <a href="./file/nicepay-module-opencart-cc-v3.0-api-v1.zip">Opencart API V1</a> - 
                <a href="./file/nicepay-module-opencart-cc-v3.0-api-v2.zip">Opencart API V2</a>
            </div>
        </div>
    </div>
    <div class="col" id="prestashop" title="tab">
        <div class="card">
            <div class="card-header">
                NICEPay PrestaShop <!-- 1.6 Installation -->
            </div>
            <div class="card-body">
                <p class="card-text">
                    <!-- <ol> -->
                        <!-- <li>Copy-paste module prestashop 1.6 Nicepay ke folder Merchant (paste di folder modules)</li> -->
                        <!-- <li>Copy-paste Prestashop Nicepay modules to Merchant folder (paste in modules folder)</li> -->
                        <!-- <li>Login to Prestashop admin page</li> -->
                        <!-- <li>Click Menu Modules and Services</li> -->
                        <!-- <li>Click sub Menu Payment</li> -->
                        <!-- <li>Choose Nicepay payment and click install</li> -->
                        <!-- <li>Fill MID and Merchan Key, then save</li> -->
                        <!-- <li>Nicepay payment already to use</li> -->
                    <!-- </ol> -->
                    <ol>
                        <li>Only for prestashop we have collaborated with prestashop.</li>
                        <li>Merchants can get nicepay prestashop modules via the link that we have included below</li>
                    </ol>
                </p>
            </div>
            <div class="card-footer">
                <a href="https://webindoshop.com/en/payments-and-gateways/57-nicepay.html">NICEPay Prestashop</a>
            </div>
        </div>
    </div>
    <div class="col" id="whmcs" title="tab">
        <div class="card">
            <div class="card-header">
                NICEPay WHMCS 6.3.1 Installation
            </div>
            <div class="card-body">
                <p class="card-text">
                    <ol>
                        <li>Copy-paste WHMCS Nicepay modules extension to Merchant folder (note folder structure copy paste, copy file one by one per folder)</li>
                        <li>Login to WHMCS admin page</li>
                        <li>Click Menu Setup</li>
                        <li>Click Payment <i class="fas fa-arrow-right"></i> Payment gateways</li>
                        <li>Find and click Nicepay payment module</li>
                        <li>Fill MID and Merchant key Nicepay</li>
                        <li>Add Nicepay payment on products , by Clicking menu Setup <i class="fas fa-arrow-right"></i> Product & Services</li>
                        <li>Click Edit Group and add checklis Nicepay VA checkbox </li>
                        <li>Payment already active</li>
                        <li>For checking payment installation, open front-end page , and then process checkout, choose Nicepay payment method, follow next intructions untill finish</li>
                        <li>For checking all transactions process, login to page admin , click menu Order <i class="fas fa-arrow-right"></i> List All Orders</li>
                    </ol>
                </p>
            </div>
            <div class="card-footer">
                <a href="./file/whmcs7x-apiV1.zip">WHMCS API V1</a> -- <a href="./file/whmcs7x-apiV2.zip">WHMCS API V2</a>
            </div>
        </div>
    </div>
</div>