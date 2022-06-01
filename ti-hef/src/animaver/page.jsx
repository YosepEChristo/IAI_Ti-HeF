import React from "react";

function App() {
  return (
    <div className="container-center-horizontal">
      <div className="frame-1screen">
        <div className="flex-row">
          <img className="chef-hat-2-1" src="chef-hat-2-1-1.png" />
          <div className="ti-hefinter-normal-cloud-burst-32px">
            <span className="inter-normal-cloud-burst-32px">Ti-Hef</span>
          </div>
        </div>
        <img className="line-1" src="line-1-1.png" />
        <div className="flex-row-1">
          <h1 className="tihefdescinter-bold-cloud-burst-40px">
            <span className="inter-bold-cloud-burst-40px">
              TI-HeF
              <br />
            </span>
            <span className="inter-bold-cloud-burst-32px">
              <br />
              TI-HeF is an application that helps you to fulfill your healthy food intake
            </span>
          </h1>
          <div className="overlap-group">
            <div className="bmi-calculatorinter-bold-cloud-burst-32px">
              <span className="inter-bold-cloud-burst-32px">BMI Calculator</span>
            </div>
          </div>
        </div>
        <div className="menu">
          <div className="item-container">
            <div className="item-1">
              <img className="fooditem-g_1" src="fooditemg-1-1.png" />
              <div className="overlap-group4">
                <div className="flex-col">
                  <div className="fooditem-n_1inter-bold-cloud-burst-27px">
                    <span className="inter-bold-cloud-burst-27px">Sweet Sandwich</span>
                  </div>
                  <div className="fooditem-containerinter-bold-cloud-burst-21px">
                    <div className="fooditem-k">
                      <span className="inter-bold-cloud-burst-21px">Kalori:&nbsp;&nbsp;330 kalori</span>
                    </div>
                    <div className="fooditem-h">
                      <span className="inter-bold-cloud-burst-21px">Harga: Rp.17000</span>
                    </div>
                  </div>
                </div>
                <Upload />
              </div>
            </div>
            <div className="item-2">
              <img className="fooditem-g_2" src="fooditemg-2-1.png" />
              <div className="overlap-group3">
                <div className="flex-col-1">
                  <div className="fooditem-n_2inter-bold-cloud-burst-27px">
                    <span className="inter-bold-cloud-burst-27px">Savory sandwich</span>
                  </div>
                  <div className="fooditem-container-1inter-bold-cloud-burst-21px">
                    <div className="fooditem-h">
                      <span className="inter-bold-cloud-burst-21px">Harga: Rp.20000</span>
                    </div>
                    <div className="fooditem-k">
                      <span className="inter-bold-cloud-burst-21px">Kalori: 431 kalori</span>
                    </div>
                  </div>
                </div>
                <Upload className="food-add2" />
              </div>
            </div>
            <div className="item-3">
              <img className="fooditem-g_3" src="fooditemg-3-1.png" />
              <div className="overlap-group2">
                <div className="flex-col-2">
                  <div className="fooditem-n_3inter-bold-cloud-burst-32px">
                    <span className="inter-bold-cloud-burst-32px">Nasi Ayam</span>
                  </div>
                  <div className="fooditem-container-2inter-bold-cloud-burst-21px">
                    <div className="fooditem-k">
                      <span className="inter-bold-cloud-burst-21px">Kalori: 357 kalori</span>
                    </div>
                    <div className="fooditem-h">
                      <span className="inter-bold-cloud-burst-21px">Harga: Rp.25000</span>
                    </div>
                  </div>
                </div>
                <div className="food-add3">
                  <img className="union-1" src="union-2.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="overlap-group-container">
            <div className="overlap-group1">
              <div className="bg"></div>
              <Upload className="food-add4" />
              <div className="fooditem-k_4inter-bold-cloud-burst-21px">
                <span className="inter-bold-cloud-burst-21px">Kalori: 553 kalori</span>
              </div>
              <div className="fooditem-n_4inter-bold-cloud-burst-32px">
                <span className="inter-bold-cloud-burst-32px">Nasi Tuna</span>
              </div>
              <img className="fooditem-g" src="fooditemg-4-1.png" />
              <div className="fooditem-h_4inter-bold-cloud-burst-21px">
                <span className="inter-bold-cloud-burst-21px">Harga: Rp.30000</span>
              </div>
            </div>
            <div className="overlap-group-1">
              <img className="bg-1" src="bg-1.png" />
              <Upload className="foof-add5" />
              <div className="fooditem-k_5inter-bold-cloud-burst-21px">
                <span className="inter-bold-cloud-burst-21px">Kalori: 258 kalori</span>
              </div>
              <div className="fooditem-n_5inter-bold-cloud-burst-27px">
                <span className="inter-bold-cloud-burst-27px">Smoothies Bowl</span>
              </div>
              <img className="fooditem-g" src="fooditemg-5-1.png" />
              <div className="fooditem-h_5inter-bold-cloud-burst-21px">
                <span className="inter-bold-cloud-burst-21px">Harga: Rp.20000</span>
              </div>
            </div>
          </div>
        </div>
        <img className="keranjang" src="keranjang-1.png" />
      </div>
    </div>
  );
}

export default App;

function Upload(props) {
  const { className } = props;

  return (
    <div className={`food-add1 ${className || ""}`}>
      <img className="union" src="union-2.png" />
    </div>
  );
}