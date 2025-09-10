// Mock API service for demonstration
// Replace this with your actual API calls

const MOCK_DATA = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    status: 'Active',
    role: 'Admin',
    createdAt: '2024-01-15T10:30:00Z',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    status: 'Active',
    role: 'User',
    createdAt: '2024-01-20T14:45:00Z',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    status: 'Inactive',
    role: 'User',
    createdAt: '2024-01-10T09:15:00Z',
  },
  {
    id: 4,
    name: 'Alice Brown',
    email: 'alice.brown@example.com',
    status: 'Active',
    role: 'Manager',
    createdAt: '2024-01-25T16:20:00Z',
  },
  {
    id: 5,
    name: 'Charlie Wilson',
    email: 'charlie.wilson@example.com',
    status: 'Pending',
    role: 'User',
    createdAt: '2024-01-30T11:00:00Z',
  },
  {
    id: 6,
    name: 'Diana Prince',
    email: 'diana.prince@example.com',
    status: 'Active',
    role: 'Admin',
    createdAt: '2024-01-05T13:30:00Z',
  },
  {
    id: 7,
    name: 'Eve Adams',
    email: 'eve.adams@example.com',
    status: 'Inactive',
    role: 'User',
    createdAt: '2024-01-12T08:45:00Z',
  },
  {
    id: 8,
    name: 'Frank Miller',
    email: 'frank.miller@example.com',
    status: 'Active',
    role: 'Developer',
    createdAt: '2024-01-28T15:10:00Z',
  },
];

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchData = async () => {
  try {
    // Simulate network delay
    await delay(1000);
    
    // Simulate occasional errors (uncomment to test error handling)
    // if (Math.random() < 0.1) {
    //   throw new Error('Failed to fetch data from server');
    // }
    
    return {
      data: MOCK_DATA,
      success: true,
    };
  } catch (error) {
    throw new Error(`API Error: ${error.message}`);
  }
};

// Example of how to implement with a real API
export const fetchDataFromAPI = async (endpoint) => {
  try {
    const response = await fetch(endpoint);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return {
      data,
      success: true,
    };
  } catch (error) {
    throw new Error(`API Error: ${error.message}`);
  }
};
