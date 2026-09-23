import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ProjectCasePage, { EnquiryFlow } from './ProjectCasePage';
import '../i18n';

test('lets visitors explore the flow and prevents stepping beyond its boundaries', () => {
    render(<EnquiryFlow language="en" />);
    expect(screen.getByRole('button', { name: 'Previous step' })).toBeDisabled();
    fireEvent.click(screen.getByRole('button', { name: /06 Personal follow-up/ }));
    expect(screen.getByRole('button', { name: 'Next step' })).toBeDisabled();
    expect(screen.getByText(/continue the conversation/)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Previous step' }));
    expect(screen.getByText(/receives the enquiry as structured information/)).toBeInTheDocument();
});

test('handles an unknown project with a way back to the overview', () => {
    render(<MemoryRouter initialEntries={['/projects/unknown']}><Routes>
        <Route path="/projects/:slug" element={<ProjectCasePage />} />
    </Routes></MemoryRouter>);
    expect(screen.getByRole('heading', { name: 'Project not found' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'All projects' })).toHaveAttribute('href', '/projects');
});
