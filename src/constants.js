
const COLOROPTIONS = ['red', 'green', 'blue', 'white', 'black'];

const INITIALSTATECONTACTPREFERENCES = [
    { value: 'Email', selected: false },
    { value: 'Phone Call', selected: false },
    { value: 'SMS', selected: false }
];

const TABLEHEADERS = [
    {
      title: 'Name',
      align: 'center',
      sortable: false,
      key: 'name',
    },
    {
      title: 'Surname',
      align: 'center',
      sortable: false,
      key: 'surname',
    },
    {
      title: 'Email',
      align: 'center',
      sortable: false,
      key: 'email',
    },
    {
      title: 'Age',
      align: 'center',
      sortable: false,
      key: 'age',
    },
    {
      title: 'Favorite Color',
      align: 'center',
      sortable: false,
      key: 'favoriteColor',
    },
    {
      title: 'Contact Preferences',
      align: 'center',
      sortable: false,
      key: 'contactPreferences'
    },
    {
      title: 'Actions',
      align: 'center',
      sortable: false,
      key: 'actions',
    }
  ]

export { INITIALSTATECONTACTPREFERENCES, COLOROPTIONS, TABLEHEADERS};
