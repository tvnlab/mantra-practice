import Book from "./components/Book";
import books from "./variables/book";

const SutraTranscribing = () => {
  return (
    <div className="h-100vh mt-6 flex w-full justify-start">
      <Book name={books[0].name} coverImage={books[0].cover} author={books[0].author}/>
    </div>
  );
};

export default SutraTranscribing;
