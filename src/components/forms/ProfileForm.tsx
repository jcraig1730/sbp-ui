const states = [
  { text: "Alabama", code: "al" },
  { text: "Alaska", code: "ak" },
  { text: "Arizona", code: "az" },
  { text: "Arkansas", code: "ar" },
  { text: "California", code: "ca" },
  { text: "Colorado", code: "co" },
  { text: "Connecticut", code: "ct" },
  { text: "Delaware", code: "de" },
  { text: "Florida", code: "fl" },
  { text: "Georgia", code: "ga" },
  { text: "Hawaii", code: "hi" },
  { text: "Idaho", code: "id" },
  { text: "Illinois", code: "il" },
  { text: "Indiana", code: "in" },
  { text: "Iowa", code: "ia" },
  { text: "Kansas", code: "ks" },
  { text: "Kentucky", code: "ky" },
  { text: "Louisiana", code: "la" },
  { text: "Maine", code: "me" },
  { text: "Maryland", code: "md" },
  { text: "Massachusetts", code: "ma" },
  { text: "Michigan", code: "mi" },
  { text: "Minnesota", code: "mn" },
  { text: "Mississippi", code: "ms" },
  { text: "Missouri", code: "mo" },
  { text: "Montana", code: "mt" },
  { text: "Nebraska", code: "ne" },
  { text: "Nevada", code: "nv" },
  { text: "New Hampshire", code: "nh" },
  { text: "New Jersey", code: "nj" },
  { text: "New Mexico", code: "nm" },
  { text: "New York", code: "ny" },
  { text: "North Carolina", code: "nc" },
  { text: "North Dakota", code: "nd" },
  { text: "Ohio", code: "oh" },
  { text: "Oklahoma", code: "ok" },
  { text: "Oregon", code: "or" },
  { text: "Pennsylvania", code: "pa" },
  { text: "Rhode Island", code: "ri" },
  { text: "South Carolina", code: "sc" },
  { text: "South Dakota", code: "sd" },
  { text: "Tennessee", code: "tn" },
  { text: "Texas", code: "tx" },
  { text: "Utah", code: "ut" },
  { text: "Vermont", code: "vt" },
  { text: "Virginia", code: "va" },
  { text: "Washington", code: "wa" },
  { text: "West Virginia", code: "wv" },
  { text: "Wisconsin", code: "wi" },
  { text: "Wyoming", code: "wy" },
];

const ProfileForm = () => {
  return (
    <div className="bg-primary shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
      <h2>Profile</h2>
      <div className="-mx-3 md:flex mb-6">
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            First Name
          </label>
          <input
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
          />
          {/* <p className="text-red text-xs italic">Please fill out this field.</p> */}
        </div>
        <div className="md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            htmlFor="grid-last-name"
          >
            Last Name
          </label>
          <input
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
            id="grid-last-name"
            type="text"
            placeholder="Doe"
          />
        </div>
      </div>

      <div className="-mx-3 md:flex mb-2">
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            htmlFor="grid-city"
          >
            City
          </label>
          <input
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
            id="grid-city"
            type="text"
            placeholder="Albuquerque"
          />
        </div>
        <div className="md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            htmlFor="grid-state"
          >
            State
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
              id="grid-state"
            >
              {states.map((s) => (
                <option value={s.code} key={s.text}>
                  {s.text}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
              <svg
                className="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            htmlFor="grid-zip"
          >
            Zip
          </label>
          <input
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
            id="grid-zip"
            type="text"
            placeholder="90210"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
