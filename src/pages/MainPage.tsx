import { useSelector } from 'react-redux';
import { MainLayout, NoContent, ProfileCard } from '../components';
import { getProfilesSelector } from '../store/profiles/selectors.ts';

function MainPage() {
  const profiles = useSelector(getProfilesSelector);

  return (
    <MainLayout hasContent={!!profiles.length}>
      {profiles.length ? (
        profiles.map((profile) => <ProfileCard key={profile.id} {...profile} />)
      ) : (
        <NoContent message="There are no profile cards yet" />
      )}
    </MainLayout>
  );
}

export default MainPage;
