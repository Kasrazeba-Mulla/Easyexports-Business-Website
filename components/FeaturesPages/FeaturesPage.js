import React from "react";
import Header from "../UI/Header";
import i2 from "../../assets/b2.jpg";
import classes from "./FeaturesPage.module.css";
import FeaturesBottom from "./FeaturesBottom";

function FeaturesPage() {
  return (
    <>
      <Header image={i2} btnName={"Back"} pathData={"/"} />
      <p className={classes.p1}>
        Easyexports is a B2B web platform that connects exporters with
        buyers.It's the LinkedIn for trade partners!!
      </p>
      <p className={classes.p2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ipsum
        assumenda sapiente vitae laboriosam commodi tenetur quibusdam, ipsam
        provident autem consectetur facilis, a nulla eligendi, error enim
        debitis. Repellendus, voluptatem. Sit a ut soluta animi! Est debitis
        accusamus tenetur omnis molestias maxime, quis beatae labore
        perspiciatis, ipsam architecto nesciunt consequuntur. Iste quidem neque
        praesentium modi aperiam, exercitationem quibusdam at dolorem.
        Voluptatum exercitationem, assumenda, molestias expedita dolorum
        officiis quas ab dicta dignissimos vel perferendis sit quasi doloribus
        iusto necessitatibus eos numquam saepe ex nulla quae eum? Voluptas nisi
        soluta molestias commodi.
      </p>
      <p className={classes.p2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ipsum
        assumenda sapiente vitae laboriosam commodi tenetur quibusdam, ipsam
        provident autem consectetur facilis, a nulla eligendi, error enim
        debitis. Repellendus, voluptatem. Sit a ut soluta animi! Est debitis
        accusamus tenetur omnis molestias maxime, quis beatae labore
        perspiciatis, ipsam architecto nesciunt consequuntur. Iste quidem neque
        praesentium modi aperiam, exercitationem quibusdam at dolorem.
        Voluptatum exercitationem, assumenda, molestias expedita dolorum
        officiis quas ab dicta dignissimos vel perferendis sit quasi doloribus
        iusto necessitatibus eos numquam saepe ex nulla quae eum? Voluptas nisi
        soluta molestias commodi.
      </p>
      <p className={classes.p2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ipsum
        assumenda sapiente vitae laboriosam commodi tenetur quibusdam, ipsam
        provident autem consectetur facilis, a nulla eligendi, error enim
        debitis. Repellendus, voluptatem. Sit a ut soluta animi! Est debitis
        accusamus tenetur omnis molestias maxime, quis beatae labore
        perspiciatis, ipsam architecto nesciunt consequuntur. Iste quidem neque
        praesentium modi aperiam, exercitationem quibusdam at dolorem.
        Voluptatum exercitationem, assumenda, molestias expedita dolorum
        officiis quas ab dicta dignissimos vel perferendis sit quasi doloribus
        iusto necessitatibus eos numquam saepe ex nulla quae eum? Voluptas nisi
        soluta molestias commodi.
      </p>

      {/* feature icons- fast , scalable , graph  */}
      <div className={classes["feature-icons"]}>
        <FeaturesBottom />
      </div>
    </>
  );
}

export default FeaturesPage;
