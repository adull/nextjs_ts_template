import HomeImages from "@/components/home/HomeImages";
import HomeMood from "@/components/home/HomeMood";

export default function Body() {
    return (
      <div className="body">
        <div className="my-3">I am a web developer who lives in San Francisco.</div>
        <HomeImages />
        <HomeMood />
      </div>
    );
  }