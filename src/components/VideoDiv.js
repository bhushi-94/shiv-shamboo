import MainVid from "../images/Video-Content.mp4";

function VideoDiv() {
  return (
    <div className="pt-16 px-4 md:px-8 lg:px-16 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
        Mission
      </h2>
      <p className="text-gray-700 text-base md:text-lg leading-relaxed">
        <video
          src={MainVid}
          controls
          playsInline
          //   className="w-full h-auto object-contain rounded-lg"
        />
      </p>
    </div>
  );
}

export default VideoDiv;
