import { Element } from "react-scroll";
import {features} from "../constants"
const Features = () => {
  return (
    <section>
      <Element>
        <div className="container">
          <div className="relative flex md:flex-wrap flex-nowrap border-2 border-s3 rounded-7xl md:overflow-hidden max-md:flex-col feature-after md:g7 max-md:border-none mmax-md:rounded-none max-md:gap-3">
            {
              features.map((feature)=>(<div key={feature.id}>{feature.title}</div>))
            }
          </div>
        </div>
      </Element>
      Features
    </section>
  );
};
export default Features;
