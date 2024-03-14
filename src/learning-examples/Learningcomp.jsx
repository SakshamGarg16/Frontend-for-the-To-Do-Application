import FirstComponent from "./FirstComponent";
import {FifthComponent} from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
import LearningJavaScript from "./LearningJavaScript";

export default function LearningComp(){
    return(
<div>
    <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
      <FifthComponent/>
      <LearningJavaScript/>
</div>
    );
}