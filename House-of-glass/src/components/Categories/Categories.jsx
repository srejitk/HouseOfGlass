import { useCategory } from "Contexts/Category/CategoryContext";
import styles from "./Categories.module.css";

export default function Categories() {
  const { categoryHandler, categoryList } = useCategory();

  return (
    <section className={`${styles.glass_categories} flex-mid-center`}>
      <div className={styles.glass_categories_title}>
        <h4 className="header-3 m-1b">Categories</h4>
        <p className="body-1 m-1b">
          Browse through the various categories available to us.
        </p>
      </div>
      <div
        className={`${styles.glass_categories_container} box-shadow br-12 flex-mid-center`}
      >
        {categoryList?.slice(0, -4).map((category) => {
          const { categoryName, img } = category;
          return (
            <div
              key={category._id}
              className="card card--mini m-1 box-shadow-2"
              onClick={() => categoryHandler(category)}
            >
              <div className="card__img--mini image--responsive">
                <img src={img} />
              </div>
              <div className="card__content--row mini--content">
                <h6 className="subtitle-2 text--center">{categoryName}</h6>
              </div>
              <p className="subtitle-2 card__tag">NEW</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
