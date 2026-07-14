import 'remixicon/fonts/remixicon.css'
import RightCardContent from './RightCardContent';

const RightCard = (props) => {
  return (
    <div className="h-full w-80 overflow-hidden relative shrink-0 rounded-4xl">
        <img className="h-full w-full object-cover " src={props.img} alt="" />

        <RightCardContent color={props.color} id={props.id} tag={props.tag} />
    </div>
  );
}

export default RightCard;
