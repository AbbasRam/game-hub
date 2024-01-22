import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../assets/bullseye.webp";
import like from "../assets/like.webp";
import meh from "../assets/meh.webp";

interface Props {
    rating: number;
}

const Emoji = ({ rating }: Props) => {
    if (rating < 3) return;
    const emojiMap: { [key: number]: ImageProps } = {
        3: { src: meh, alt: "meh", boxSize: "20px" },
        4: { src: like, alt: "recommended", boxSize: "20px" },
        5: { src: bullsEye, alt: "exceptional", boxSize: "20px" },
    };
    return <Image {...emojiMap[rating]} marginTop={2} />;
};

export default Emoji;
