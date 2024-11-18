const { default: FlagImage } = require('@/components/icon/FlagImage');
const { FaDollarSign } = require('react-icons/fa6');
const { HiDocumentDuplicate } = require('react-icons/hi2');
const { MdBarChart, MdAddTask } = require('react-icons/md');

export const stateData = [
    {
        name: 'Earnings',
        value: '$350.4',
        startContent: <MdBarChart />,
    },
    {
        name: 'Spend this month',
        value: '$642.39',
        startContent: <FaDollarSign />,
    },
    {
        name: 'Sales',
        value: '$574.34',
        growth: '+24.5%',
    },
    {
        name: 'Your balance',
        value: '$1,000',
        endContent: <FlagImage country='usa' />,
    },
    {
        name: 'New Tasks',
        value: '154',
        startContent: <MdAddTask />,
    },
    {
        name: 'Total Projects',
        value: '2935',
        startContent: <HiDocumentDuplicate />,
    },
];
