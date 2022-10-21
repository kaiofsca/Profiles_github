import {
    Section,
    Title,
    ListOfFollowingContainer,
    Followi
} from './styles';

const FollowingContainer = props => {
    return (
        <Section>
            <Title>Seguindo</Title>
            <ListOfFollowingContainer>
            {(props?.following).map(followin => (
                    <Followi key={followin?.id}>
                        <h2>{followin?.login}</h2>
                        <img src={followin?.avatar_url} alt={followin?.login}></img>
                    </Followi>
                ))}
            </ListOfFollowingContainer>
        </Section>
    );
}

export default FollowingContainer;