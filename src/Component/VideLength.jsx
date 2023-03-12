import moment from "moment/moment";

const VideLength = ({ time }) => {
    const VideoLengthInSeconds = moment()
        ?.startOf("day")
        ?.seconds(time)
        ?.format("H:mm:ss");

    return (
        <span className="absolute bottom-2 right-2 bg-black py-1 px-2 text-white text-xs rounded-md"  >
            {VideoLengthInSeconds}
        </span>
    )
}

export default VideLength;