import { Component } from "react";
import Header from "../Header";
import GroupCard from "../GroupCard";
import "./index.css";

const groups = {
  status: {
    Backlog: {
      symbol: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            d="M2.625 0.875C1.67184 0.875 0.875 1.67184 0.875 2.625V11.375C0.875 12.3281 1.67184 13.125 2.625 13.125H11.375C12.3281 13.125 13.125 12.3281 13.125 11.375V2.625C13.125 1.67184 12.3281 0.875 11.375 0.875H2.625ZM6.125 3.5H7.875L7.65967 7.87356H6.34375L6.125 3.5ZM7.875 9.625C7.875 10.1083 7.48325 10.5 7 10.5C6.51675 10.5 6.125 10.1083 6.125 9.625C6.125 9.14174 6.51675 8.75 7 8.75C7.48325 8.75 7.875 9.14174 7.875 9.625Z"
            fill="#5E5E5F"
          />
        </svg>
      ),
      title: "Backlog",
    },
    Todo: {
      symbol: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z"
            stroke="#B8B8B8"
            stroke-width="2"
          />
        </svg>
      ),
      title: "Todo",
    },
    "In Progress": {
      symbol: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z"
            fill="white"
            stroke="#F2BE00"
            stroke-width="2"
          />
          <path
            d="M9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9C8.10457 9 9 8.10457 9 7Z"
            stroke="#F2BE00"
            stroke-width="4"
          />
        </svg>
      ),
      title: "In Progress",
    },
    Done: {
      symbol: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z"
            fill="#5E6AD2"
            stroke="#5E6AD2"
            stroke-width="2"
          />
          <path
            d="M10 7C10 5.34315 8.65685 4 7 4C5.34315 4 4 5.34315 4 7C4 8.65685 5.34315 10 7 10C8.65685 10 10 8.65685 10 7Z"
            stroke="#5E6AD2"
            stroke-width="6"
            stroke-dasharray="18.85 100"
          />
          <path
            d="M10.951 4.24896C11.283 4.58091 11.283 5.11909 10.951 5.45104L5.95104 10.451C5.61909 10.783 5.0809 10.783 4.74896 10.451L2.74896 8.45104C2.41701 8.11909 2.41701 7.5809 2.74896 7.24896C3.0809 6.91701 3.61909 6.91701 3.95104 7.24896L5.35 8.64792L9.74896 4.24896C10.0809 3.91701 10.6191 3.91701 10.951 4.24896Z"
            fill="#FBFBFB"
          />
        </svg>
      ),
      title: "Done",
    },
    Canceled: {
      symbol: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z"
            fill="#96A3B4"
            stroke="#96A3B4"
            stroke-width="2"
          />
          <path
            d="M10 7C10 5.34315 8.65685 4 7 4C5.34315 4 4 5.34315 4 7C4 8.65685 5.34315 10 7 10C8.65685 10 10 8.65685 10 7Z"
            stroke="#96A3B4"
            stroke-width="6"
            stroke-dasharray="18.85 100"
          />
          <path
            d="M6.99682 7.68089L4.81753 9.86018C4.72008 9.95763 4.60934 10.0041 4.48532 9.99971C4.36129 9.99528 4.25055 9.94434 4.15311 9.84689C4.05566 9.74945 4.00693 9.6365 4.00693 9.50804C4.00693 9.37959 4.05566 9.26663 4.15311 9.16919L6.31911 7.00318L4.13982 4.82388C4.04237 4.72643 3.99586 4.61348 4.00029 4.48503C4.00472 4.35657 4.05566 4.24362 4.15311 4.14617C4.25055 4.04872 4.36351 4 4.49196 4C4.62041 4 4.73337 4.04872 4.83081 4.14617L6.99682 6.32547L9.17612 4.14617C9.27357 4.04872 9.38652 4 9.51497 4C9.64343 4 9.75638 4.04872 9.85383 4.14617C9.95128 4.24362 10 4.35657 10 4.48503C10 4.61348 9.95128 4.72643 9.85383 4.82388L7.67453 7.00318L9.85383 9.18247C9.95128 9.27992 10 9.39066 10 9.51468C10 9.63871 9.95128 9.74945 9.85383 9.84689C9.75638 9.94434 9.64343 9.99307 9.51497 9.99307C9.38652 9.99307 9.27357 9.94434 9.17612 9.84689L6.99682 7.68089Z"
            fill="#E8EAED"
          />
        </svg>
      ),
      title: "Canceled",
    },
  },
  priority: {
    0: {
      title: "No priority",
      symbol: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            opacity="0.9"
            d="M4.5 7.34375H2.75C2.50838 7.34375 2.3125 7.53963 2.3125 7.78125V8.21875C2.3125 8.46037 2.50838 8.65625 2.75 8.65625H4.5C4.74162 8.65625 4.9375 8.46037 4.9375 8.21875V7.78125C4.9375 7.53963 4.74162 7.34375 4.5 7.34375Z"
            fill="#5E5E5F"
          />
          <path
            opacity="0.9"
            d="M8.875 7.34375H7.125C6.88338 7.34375 6.6875 7.53963 6.6875 7.78125V8.21875C6.6875 8.46037 6.88338 8.65625 7.125 8.65625H8.875C9.11662 8.65625 9.3125 8.46037 9.3125 8.21875V7.78125C9.3125 7.53963 9.11662 7.34375 8.875 7.34375Z"
            fill="#5E5E5F"
          />
          <path
            opacity="0.9"
            d="M13.25 7.34375H11.5C11.2584 7.34375 11.0625 7.53963 11.0625 7.78125V8.21875C11.0625 8.46037 11.2584 8.65625 11.5 8.65625H13.25C13.4916 8.65625 13.6875 8.46037 13.6875 8.21875V7.78125C13.6875 7.53963 13.4916 7.34375 13.25 7.34375Z"
            fill="#5E5E5F"
          />
        </svg>
      ),
    },
    1: {
      title: "Low",
      symbol: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M3.5 8H2.5C1.94772 8 1.5 8.44772 1.5 9V13C1.5 13.5523 1.94772 14 2.5 14H3.5C4.05228 14 4.5 13.5523 4.5 13V9C4.5 8.44772 4.05228 8 3.5 8Z"
            fill="#5C5C5E"
          />
          <path
            d="M8.5 5H7.5C6.94772 5 6.5 5.44772 6.5 6V13C6.5 13.5523 6.94772 14 7.5 14H8.5C9.05228 14 9.5 13.5523 9.5 13V6C9.5 5.44772 9.05228 5 8.5 5Z"
            fill="#5C5C5E"
            fill-opacity="0.4"
          />
          <path
            d="M13.5 2H12.5C11.9477 2 11.5 2.44772 11.5 3V13C11.5 13.5523 11.9477 14 12.5 14H13.5C14.0523 14 14.5 13.5523 14.5 13V3C14.5 2.44772 14.0523 2 13.5 2Z"
            fill="#5C5C5E"
            fill-opacity="0.4"
          />
        </svg>
      ),
    },
    2: {
      title: "Medium",
      symbol: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M3.5 8H2.5C1.94772 8 1.5 8.44772 1.5 9V13C1.5 13.5523 1.94772 14 2.5 14H3.5C4.05228 14 4.5 13.5523 4.5 13V9C4.5 8.44772 4.05228 8 3.5 8Z"
            fill="#5C5C5E"
          />
          <path
            d="M8.5 5H7.5C6.94772 5 6.5 5.44772 6.5 6V13C6.5 13.5523 6.94772 14 7.5 14H8.5C9.05228 14 9.5 13.5523 9.5 13V6C9.5 5.44772 9.05228 5 8.5 5Z"
            fill="#5C5C5E"
          />
          <path
            d="M13.5 2H12.5C11.9477 2 11.5 2.44772 11.5 3V13C11.5 13.5523 11.9477 14 12.5 14H13.5C14.0523 14 14.5 13.5523 14.5 13V3C14.5 2.44772 14.0523 2 13.5 2Z"
            fill="#5C5C5E"
            fill-opacity="0.4"
          />
        </svg>
      ),
    },
    3: {
      title: "High",
      symbol: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M3.5 8H2.5C1.94772 8 1.5 8.44772 1.5 9V13C1.5 13.5523 1.94772 14 2.5 14H3.5C4.05228 14 4.5 13.5523 4.5 13V9C4.5 8.44772 4.05228 8 3.5 8Z"
            fill="#5C5C5E"
          />
          <path
            d="M8.5 5H7.5C6.94772 5 6.5 5.44772 6.5 6V13C6.5 13.5523 6.94772 14 7.5 14H8.5C9.05228 14 9.5 13.5523 9.5 13V6C9.5 5.44772 9.05228 5 8.5 5Z"
            fill="#5C5C5E"
          />
          <path
            d="M13.5 2H12.5C11.9477 2 11.5 2.44772 11.5 3V13C11.5 13.5523 11.9477 14 12.5 14H13.5C14.0523 14 14.5 13.5523 14.5 13V3C14.5 2.44772 14.0523 2 13.5 2Z"
            fill="#5C5C5E"
          />
        </svg>
      ),
    },
    4: {
      title: "Urgent",
      symbol: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M3 1C1.91067 1 1 1.91067 1 3V13C1 14.0893 1.91067 15 3 15H13C14.0893 15 15 14.0893 15 13V3C15 1.91067 14.0893 1 13 1H3ZM7 4H9L8.75391 8.99836H7.25L7 4ZM9 11C9 11.5523 8.55228 12 8 12C7.44772 12 7 11.5523 7 11C7 10.4477 7.44772 10 8 10C8.55228 10 9 10.4477 9 11Z"
            fill="#FB773F"
          />
        </svg>
      ),
    },
  },
};

class Board extends Component {
  state = {
    tickets: [],
    users: [],
    groupBy: "status",
    orderBy: "priority",
    groupedTickets: [],
  };

  componentDidMount() {
    this.getDetails();
  }

  getDetails = async () => {
    const response = await fetch(
      " https://api.quicksell.co/v1/internal/frontend-assignment "
    );
    if (response.ok) {
      const data = await response.json();

      this.setState({
        tickets: data["tickets"],
        users: data["users"],
      });
    }
  };

  changeGroupBy = (value) => {
    const { tickets, users } = this.state;

    // Helper function to merge user details with tickets
    const getUserDetailsForTicket = (ticket) => {
      const user = users.find((user) => user.id === ticket.userId);
      return {
        ...ticket,
        userName: user?.name || "Unknown",
        available: user?.available || false,
      };
    };

    let groupedTickets = [];

    if (value === "status") {
      const statuses = ["Backlog", "Todo", "In progress", "Done", "Canceled"];
      groupedTickets = statuses.map((status) => {
        const filteredTickets = tickets
          .filter((ticket) => ticket.status === status)
          .map(getUserDetailsForTicket);
        return { groupName: status, tickets: filteredTickets };
      });
    } else if (value === "priority") {
      const priorities = [0, 1, 2, 3, 4];
      groupedTickets = priorities.map((priority) => {
        const filteredTickets = tickets
          .filter((ticket) => ticket.priority === priority)
          .map(getUserDetailsForTicket);
        return { groupName: priority, tickets: filteredTickets };
      });
    } else if (value === "users") {
      groupedTickets = users.map((user) => {
        const filteredTickets = tickets
          .filter((ticket) => ticket.userId === user.id)
          .map(getUserDetailsForTicket);
        return { groupName: user.name, tickets: filteredTickets };
      });
    }


    this.setState({
      groupBy: value,
      groupedTickets,
    });
  };

  changeOrderBy = (value) => {
    const { groupedTickets } = this.state; // Get the current grouped tickets

    // Sort tickets within each group based on the selected orderBy value
    const sortedGroupedTickets = groupedTickets.map((group) => {
      // Check if the group is by priority, if so, return it as is
      if (this.state.groupBy === "priority") {
        return group; // No sorting needed for priority groups
      }

      // Sort tickets within the group based on the value
      const sortedTickets = group.tickets.sort((a, b) => {
        if (value === "title") {
          return a.title.localeCompare(b.title); // Sort by title alphabetically
        } else if (value === "priority") {
          return a.priority - b.priority; // Sort by priority numerically
        }
        return 0; // Default case (shouldn't be hit)
      });

      // Return the group with sorted tickets
      return {
        ...group,
        tickets: sortedTickets,
      };
    });

    // Update the state with sorted grouped tickets and the current order value
    this.setState({
      groupedTickets: sortedGroupedTickets,
      orderBy: value,
    });
  };

  render() {
    const { groupBy, tickets, users, groupedTickets } = this.state;

    return (
      <div className="kanban-board">
        <Header
          changeGroupBy={this.changeGroupBy}
          changeOrderBy={this.changeOrderBy}
        />
        <div className="groups-container">
          {groupedTickets.map((eachItem) => (
            <GroupCard type={groupBy} itemDetails={eachItem} />
          ))}
          
        </div>
      </div>
    );
  }
}

export default Board;
