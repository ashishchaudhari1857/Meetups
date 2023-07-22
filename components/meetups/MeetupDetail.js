import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import Link from 'next/link';

function MeetupDetail(props) {
  return (
    
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.description}>
            <p>{props.description}</p>
        </div>
      </Card>
    
  );
}

export default MeetupDetail;
