import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from "react-toastify"; 
import { Input, Button, InputContainer } from './SearchBar.styled';

const SearchBar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    function onSubmitForm(event) {
        event.preventDefault();
        const value = event.target.elements.query.value;
        
        if (value === searchParams.get('query')) {
        
            toast.error(`The results of the query "${value}" are already available. 
            Please find the desired movie among the results or enter a new query`)
        return
        }
        if (value === '') {
            
            toast.error(`Please enter a request`)
        return
        }
           navigate({
      ...location,
      search: `query=${value}`,
    });
  }

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <InputContainer>
          <Input
            type="text"
            name='query'
            defaultValue={searchParams.get('query')}
          />
          <Button type='submit'>Search </Button>
          </InputContainer>
      </form>
      </>
  );
}
export default SearchBar;