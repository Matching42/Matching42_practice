import React, { useEffect, useState } from 'react';

function Clock() {
    const [date, setDate] = useState({
        hours: '',
        minutes: '',
        seconds: ''
    });

    const { hours, seconds, minutes } = date;

    useEffect(() => {
        let date = new Date();
        setDate({
            hours: date.getHours(),
            minutes: date.getMinutes(),
            seconds: date.getSeconds()
        });
    });

    return (
        <div className="Clock">지금은 {hours}시 {minutes}분 {seconds}초</div>
    );
}

export default Clock;