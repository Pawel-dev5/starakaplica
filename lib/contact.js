import { fetchAPI } from './fetchAPI';

const USER_ID = process.env.USER_ID;
const TAMPLATE_ID = process.env.TAMPLATE_ID;
const SERVICE_ID = process.env.SERVICE_ID;

export async function getContactData() {
	const data = await fetchAPI(`
  {
    pageBy(id: "cG9zdDoyMg==") {
      id
      title
      kontakt {
        fieldGroupName
        map
        contaktitems {
          adres
          adresemail
          description
          facebook
          fieldGroupName
          instagram
          telefon
          title
        }
      }
    }
  }
`);
	return data?.pageBy;
}

export async function getConfig() {
	const config = {
		userId: USER_ID,
		serviceId: SERVICE_ID,
		tamplateId: TAMPLATE_ID,
	};

	return config;
}
