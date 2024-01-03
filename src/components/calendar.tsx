import React from 'react'
import {
    Navbar as MTNavbar,
    Collapse,
    Button,
    IconButton,
    Typography,
} from "@material-tailwind/react";

export function Calendar() {
  return (
    <section className="mt-8 px-8">
      <div className="container mx-auto mb-16 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Calendar
        </Typography>
      </div>
    </section>
  )
}

export default Calendar