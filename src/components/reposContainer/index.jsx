import {
    Section,
    Title,
    ListOfReposContainer,
    Repo
} from './styles';

const ReposContainer = props => {
    return (
        <Section>
            <Title>Repositórios</Title>
            <ListOfReposContainer>
                {(props?.repos).map(repo => (
                    <Repo key={repo?.id}>
                        <h2>{repo?.name}</h2>
                        <p>{repo?.description}</p>
                    </Repo>
                ))}
            </ListOfReposContainer>
        </Section>
    );
}

export default ReposContainer;