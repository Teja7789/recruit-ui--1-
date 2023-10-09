const resourceColumnConfig = [
    {
        field: 'resourceId',
        header: 'Resource ID',
        isSelected: true,
        isChecked: false,
        isPermanent: true,
    },
    {
        field: 'resourceName',
        header: 'Resource Name',
        isSelected: true,
        isChecked: true,
        isPermanent: false,
    },
    {
        field: 'role',
        header: 'Roll',
        isSelected: true,
        isChecked: true,
        isPermanent: false,
    },
    {
        field: 'vendor',
        header: 'Vendor',
        isSelected: true,
        isChecked: true,
        isPermanent: false,
    },
    {
        field: 'joinDate',
        header: 'Join Date',
        isSelected: false,
        isChecked: false,
        isPermanent: false,
    },
    {
        field: 'status',
        header: 'Status',
        isSelected: false,
        isChecked: false,
        isPermanent: false,
    },
];

export default resourceColumnConfig;
