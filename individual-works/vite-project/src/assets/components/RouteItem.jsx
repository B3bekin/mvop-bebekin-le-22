function RouteItem(props) {

    return (
        <div style={{
            "backgroundColor": `#${props.route_bg_color}`,
            "color": `#${props.route_color}`
        }} className="flex flex-col gap-4 items-center p-8 text-center">
            <div className="text-lg">{props.route_long_name}</div>
            <div>{props.route_short_name}</div>
            <div className="underline"><a target="_blank" href={props.route_url}>{props.route_url}</a></div>
        </div>
    );
}

export default RouteItem;