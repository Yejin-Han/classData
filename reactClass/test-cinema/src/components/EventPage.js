import React from 'react';

function EventPage(props){
  return(
    <div id="evt_box">
			<img src={"../img/event_detail"+props.id+".jpg"} alt="" />
		</div>
  );
}

export default EventPage;