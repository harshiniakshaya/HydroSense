export const complaintsData = [
    { complaint_id: 'C001', sno: 1, name: 'John Doe', phone_number: '123-456-7890', sensor_id: 'S123', location: 'Building A', timestamp: '2024-08-06 12:00', employee_id: 'E001', employee_name: 'Alice Smith', status: 'Pending' },
    { complaint_id: 'C002', sno: 2, name: 'Jane Roe', phone_number: '987-654-3210', sensor_id: 'S124', location: 'Building B', timestamp: '2024-08-06 13:00', employee_id: 'E002', employee_name: 'Bob Johnson', status: 'Pending' },
    { complaint_id: 'C003', sno: 3, name: 'Emily Davis', phone_number: '456-789-0123', sensor_id: 'S125', location: 'Building C', timestamp: '2024-08-06 14:00', employee_id: 'E001', employee_name: 'Alice Smith', status: 'In Progress' },
    { complaint_id: 'C004', sno: 4, name: 'Michael Brown', phone_number: '321-654-9870', sensor_id: 'S126', location: 'Building D', timestamp: '2024-08-06 15:00', employee_id: 'E003', employee_name: 'Carol Davis', status: 'Resolved' },
    { complaint_id: 'C005', sno: 5, name: 'Sarah Wilson', phone_number: '654-321-0987', sensor_id: 'S127', location: 'Building E', timestamp: '2024-08-06 16:00', employee_id: 'E004', employee_name: 'David Martinez', status: 'Pending' },
    { complaint_id: 'C006', sno: 6, name: 'Robert Johnson', phone_number: '567-890-1234', sensor_id: 'S128', location: 'Building A', timestamp: '2024-08-07 09:00', employee_id: 'E001', employee_name: 'Alice Smith', status: 'Pending' },
    { complaint_id: 'C007', sno: 7, name: 'Linda Martin', phone_number: '345-678-9012', sensor_id: 'S129', location: 'Building B', timestamp: '2024-08-07 10:00', employee_id: 'E002', employee_name: 'Bob Johnson', status: 'In Progress' },
    { complaint_id: 'C008', sno: 8, name: 'James White', phone_number: '678-901-2345', sensor_id: 'S130', location: 'Building C', timestamp: '2024-08-08 11:00', employee_id: 'E003', employee_name: 'Carol Davis', status: 'Resolved' },
    { complaint_id: 'C009', sno: 9, name: 'Patricia Clark', phone_number: '789-012-3456', sensor_id: 'S131', location: 'Building D', timestamp: '2024-08-08 12:00', employee_id: 'E004', employee_name: 'David Martinez', status: 'Pending' },
    { complaint_id: 'C010', sno: 10, name: 'Michael Lewis', phone_number: '890-123-4567', sensor_id: 'S132', location: 'Building E', timestamp: '2024-08-09 13:00', employee_id: 'E001', employee_name: 'Alice Smith', status: 'In Progress' }
];


export const employeesData = [
    { id: 'E001', name: 'Alice Smith', role: 'Water Leak Specialist', phone_number: '123-456-7890', status: 'Active', assignedComplaints: ['C001', 'C003', 'C006', 'C010'] },
    { id: 'E002', name: 'Bob Johnson', role: 'pH Level Analyst', phone_number: '987-654-3210', status: 'Inactive', assignedComplaints: ['C002', 'C007'] },
    { id: 'E003', name: 'Carol Davis', role: 'Water Leak Specialist', phone_number: '456-789-0123', status: 'Active', assignedComplaints: ['C004', 'C008'] },
    { id: 'E004', name: 'David Martinez', role: 'Maintenance Technician', phone_number: '789-012-3456', status: 'Active', assignedComplaints: ['C005', 'C009'] },
    { id: 'E005', name: 'Ella Lewis', role: 'pH Level Analyst', phone_number: '012-345-6789', status: 'Inactive', assignedComplaints: [] }
];
