import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
    return (
        <InputGroup>
            <InputLeftElement children={<BsSearch />}></InputLeftElement>
            <Input
                borderRadius={20}
                placeholder="Search games"
                variant="field"
            />
        </InputGroup>
    );
};

export default SearchInput;
