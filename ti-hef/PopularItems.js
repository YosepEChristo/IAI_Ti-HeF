import React from "react";
import styles from "./PopularItems.module.scss";

const PopularItems = () => {
  return (
    <div className={styles.popularItemsTwo}>
      <p className={styles.num130Cal}>130 cal</p>
      <p className={styles.popularItems}>Popular Items</p>
      <p className={styles.mostOrderedItems}>
        Most Ordered Items
      </p>
      <div className={styles.popularItemsTwo}>
        <div className={styles.flexWrapperTen}>
          <div className={styles.item1}>
            <img
              alt=""
              className={styles.gadoGado1}
              src="https://static.overlay-tech.com/assets/29a097a1-dcd1-443a-bfbd-35457b760d96.png"
            />
            <div className={styles.flexWrapperNine}>
              <p className={styles.gadoGado}>Gado-Gado</p>
            </div>
          </div>
          <div className={styles.item2}>
            <img
              alt=""
              className={styles.tinutuan}
              src="https://static.overlay-tech.com/assets/8fc3ec47-7e50-41e2-a2b1-a0499eee5fbd.png"
            />
            <div className={styles.flexWrapperEight}>
              <p className={styles.gadoGado}>Tinutuan</p>
            </div>
          </div>
          <div className={styles.item2}>
            <img
              alt=""
              className={styles.sayurAsem}
              src="https://static.overlay-tech.com/assets/d3bd7ced-7546-467f-9d97-a2be1ed2c122.png"
            />
            <div className={styles.flexWrapperSeven}>
              <p className={styles.gadoGado}>Sayur asem</p>
            </div>
          </div>
        </div>
        <div className={styles.flexWrapperEleven}>
          <div className={styles.item1}>
            <img
              alt=""
              className={styles.sayurBayam}
              src="https://static.overlay-tech.com/assets/54ebe006-2112-4659-bb63-9616e70b0967.png"
            />
            <div className={styles.flexWrapperNine}>
              <p className={styles.gadoGado}>Sayur bayam</p>
            </div>
          </div>
          <div className={styles.item2}>
            <img
              alt=""
              className={styles.karedok}
              src="https://static.overlay-tech.com/assets/a1afc9fe-cb54-49df-9991-ee4cf3375fe0.png"
            />
            <div className={styles.flexWrapperEight}>
              <p className={styles.gadoGado}>
                Karedok
                <br />
              </p>
            </div>
          </div>
          <div className={styles.item2}>
            <img
              alt=""
              className={styles.supIkan}
              src="https://static.overlay-tech.com/assets/cdda2a13-6e36-425b-a055-5f8ed7f96b84.png"
            />
            <div className={styles.flexWrapperSeven}>
              <p className={styles.gadoGado}>
                Sup ikan
                <br />
              </p>
            </div>
          </div>
        </div>
        <div className={styles.flexWrapperTen}>
          <div className={styles.item7}>
            <div className={styles.flexWrapperThree}>
              <p className={styles.gadoGado}>Pepes</p>
            </div>
            <img
              alt=""
              className={styles.pepes}
              src="https://static.overlay-tech.com/assets/699ff5d7-40c5-4724-b6fd-3924137bbea4.png"
            />
          </div>
          <div className={styles.item8}>
            <div className={styles.flexWrapperTwo}>
              <p className={styles.gadoGado}>
                Sayur-sayuran
              </p>
            </div>
            <img
              alt=""
              className={styles.pepes}
              src="https://static.overlay-tech.com/assets/7640442a-80db-429b-9b6b-24634c63ec41.png"
            />
          </div>
          <div className={styles.item9}>
            <div className={styles.flexWrapperOne}>
              <p className={styles.gadoGado}>Buah-buahan</p>
            </div>
            <img
              alt=""
              className={styles.pepes}
              src="https://static.overlay-tech.com/assets/cfb03009-2e5b-4824-807b-3626cea182fa.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularItems;