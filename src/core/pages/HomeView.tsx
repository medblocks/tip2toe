import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home p-4 max-w-6xl mx-auto">
        <div className="max-w-xl mx-auto my-16 ">
          <h2 className="text-2xl pb-5">
            Questionnaire for the
            <br />
            <span className="text-udni-teal">
              Undiagnosed Diseases Network International
            </span>
            <br />
            Diagnostic Working Group
          </h2>
          <p>
            A completed tip2toe questionnaire is necessary for the patient to be
            included in the UDNI Diagnostic working group, as well as
            appropriate consents including two signed informed consents from the
            patient for WGS/data sharing/photographs/medical records/publishing:
          </p>
          <ul class="py-2">
            <li style="margin-left: 1rem;list-style-type: disc;">One local consent saved at the local UDP</li>
            <li style="margin-left: 1rem;list-style-type: disc;">
              One consent for the UDNI webpage saved at ISS/Wilhelm foundation
            </li>
          </ul>
          <p className="text-sm text-gray-600">
            This app can store your provided form data in your browser's local
            storage. You must accept functional cookies for this to work.
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:divide-x divide-udni-teal">
          <div className="w-full p-8   flex flex-col items-center my-5 group">
            <div className="flex items-center space-x-2">
              <h3>Start new form</h3>
            </div>
            <p className="text-gray-600 text-sm">
              For physicians, geneticists. Start questionnare.
            </p>
            <label className="mt-4">
              <input
                type="checkbox"
                />{' '}
              Enable cookies for auto-save
            </label>
            {
            <Link
              to="/questionnaire"
              className="border rounded p-3 px-6 mt-5 border-udni-teal text-udni-teal uppercase text-sm font-bold hover:bg-udni-teal hover:text-white"
            >
              Start new
            </Link> }
          </div>
          <div className="w-full p-8   flex flex-col items-center my-5 ">
            <div className="flex items-center space-x-2">
              <h3>Continue form</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Add images, documents to an existing form.
            </p>
          </div>
        </div>
      </div>
  );
}

export default HomePage;