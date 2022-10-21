import {
    Section,
    Title,
    ListOfFollowersContainer,
    Followe
} from './styles';

const FollowersContainer = props => {
    return (
        <Section>
            <Title>Seguidores</Title>
            <ListOfFollowersContainer>
                {(props?.followers).map(follower => (
                    <Followe key={follower?.id}>
                        <h2>{follower?.login}</h2>
                        <img src={follower?.avatar_url} alt={follower?.login}></img>
                    </Followe>
                ))}
            </ListOfFollowersContainer>
        </Section>
    );
}

export default FollowersContainer;