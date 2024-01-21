import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
    const { data, error, isLoading } = useGames();
    const sekeletons = [1, 2, 3, 4, 5, 6];

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, "2xl": 7 }}
                spacing="10px"
                padding="10px"
            >
                {isLoading &&
                    sekeletons.map((skeleton) => (
                        <GameCardContainer>
                            <GameCardSkeleton key={skeleton}></GameCardSkeleton>
                        </GameCardContainer>
                    ))}
                {data.map((game) => (
                    <GameCardContainer>
                        <GameCard key={game.id} game={game} />
                    </GameCardContainer>
                ))}
            </SimpleGrid>
        </>
    );
};

export default GameGrid;
