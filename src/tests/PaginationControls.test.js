import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import PaginationControls from '../app/components/organisms/PaginationControls.jsx';
import { setPagination } from '../app/redux/employeeSlice.js';

const mockStore = configureStore([]);

describe('PaginationControls component', () => {
  let store;
  let initialPagination;

  beforeEach(() => {
    initialPagination = {
      currentPage: 2,
      totalPages: 5,
    };

    store = mockStore({
      employee: {
        pagination: initialPagination,
      },
    });

    store.dispatch = jest.fn();
  });

  it('renders correctly', () => {
    render(
      <Provider store={store}>
        <PaginationControls pagination={initialPagination} />
      </Provider>
    );

    expect(screen.getByText('Previous')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
    expect(screen.getByText('Page 2 of 5')).toBeInTheDocument();
  });

  it('handles previous button click', () => {
    render(
      <Provider store={store}>
        <PaginationControls pagination={initialPagination} />
      </Provider>
    );

    fireEvent.click(screen.getByText('Previous'));

    expect(store.dispatch).toHaveBeenCalledWith(
      setPagination({
        ...initialPagination,
        currentPage: initialPagination.currentPage - 1,
      })
    );
  });

  it('handles next button click', () => {
    render(
      <Provider store={store}>
        <PaginationControls pagination={initialPagination} />
      </Provider>
    );

    fireEvent.click(screen.getByText('Next'));

    expect(store.dispatch).toHaveBeenCalledWith(
      setPagination({
        ...initialPagination,
        currentPage: initialPagination.currentPage + 1,
      })
    );
  });

  it('disables previous button on first page', () => {
    initialPagination.currentPage = 1;

    render(
      <Provider store={store}>
        <PaginationControls pagination={initialPagination} />
      </Provider>
    );

    expect(screen.getByText('Previous')).toBeDisabled();
  });

  it('disables next button on last page', () => {
    initialPagination.currentPage = initialPagination.totalPages;

    render(
      <Provider store={store}>
        <PaginationControls pagination={initialPagination} />
      </Provider>
    );

    expect(screen.getByText('Next')).toBeDisabled();
  });
});
