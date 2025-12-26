
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface BookingFormProps {
  selectedDate: Date | undefined;
  setSelectedDate: (date: Date | undefined) => void;
  selectedTime: string;
  setSelectedTime: (time: string) => void;
}

const BookingForm = ({ selectedDate, setSelectedDate, selectedTime, setSelectedTime }: BookingFormProps) => {
  // Generate time slots with 45-minute appointments and 15-minute breaks
  const generateTimeSlots = (date: Date | undefined) => {
    if (!date) return [];

    // Check if it's Saturday (6)
    const isSaturday = date.getDay() === 6;

    // Morning slots: 9:00 AM to 1:00 PM (Available both Mon-Fri and Sat)
    const morningSlots = [
      '9:00 AM - 9:45 AM',
      '10:00 AM - 10:45 AM',
      '11:00 AM - 11:45 AM',
      '12:00 PM - 12:45 PM'
    ];

    if (isSaturday) {
      return morningSlots;
    }

    // Afternoon slots: 1:00 PM to 4:00 PM (Mon-Fri only)
    const afternoonSlots = [
      '1:00 PM - 1:45 PM',
      '2:00 PM - 2:45 PM',
      '3:00 PM - 3:45 PM'
    ];

    return [...morningSlots, ...afternoonSlots];
  };

  const availableTimes = generateTimeSlots(selectedDate);

  return (
    <Card className="shadow-2xl border-0 bg-gradient-to-br from-white via-white to-gray-50/50 backdrop-blur-sm hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-medical-teal/5 rounded-full blur-2xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-medical-orange/5 rounded-full blur-xl" />

      <CardHeader className="pb-4 relative">
        <CardTitle className="font-playfair text-xl text-medical-charcoal text-center">
          Select Date & Time
        </CardTitle>
        <p className="text-center text-sm text-gray-600 font-inter">
          Choose your preferred appointment slot (45 minutes each)
        </p>
        <div className="w-12 h-0.5 bg-gradient-to-r from-medical-teal to-medical-orange mx-auto mt-2"></div>
      </CardHeader>

      <CardContent className="p-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label className="font-inter font-medium text-medical-charcoal flex items-center">
              <CalendarIcon className="w-4 h-4 mr-2 text-medical-teal" />
              Preferred Date *
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal bg-white border-2 hover:bg-gradient-to-r hover:from-medical-teal/5 hover:to-medical-orange/5 hover:border-medical-teal transition-all duration-300 shadow-md hover:shadow-lg",
                    !selectedDate && "text-muted-foreground",
                    selectedDate && "border-medical-teal/50 bg-gradient-to-r from-medical-teal/5 to-white"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4 text-medical-teal" />
                  {selectedDate ? format(selectedDate, "PPP") : "Select a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-white border-2 border-medical-teal/20 shadow-2xl rounded-xl" align="start">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => date < new Date() || date.getDay() === 0}
                  className="rounded-xl bg-white"
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label className="font-inter font-medium text-medical-charcoal flex items-center">
              <Clock className="w-4 h-4 mr-2 text-medical-teal" />
              Preferred Time Slot *
            </Label>
            <Select value={selectedTime} onValueChange={setSelectedTime}>
              <SelectTrigger className="border-2 hover:border-medical-teal transition-all duration-300 bg-white shadow-md hover:shadow-lg hover:bg-gradient-to-r hover:from-medical-teal/5 hover:to-medical-orange/5">
                <SelectValue placeholder="Select a time slot" />
              </SelectTrigger>
              <SelectContent className="bg-white border-2 border-medical-teal/20 shadow-xl rounded-xl">
                {availableTimes.map((timeSlot) => (
                  <SelectItem
                    key={timeSlot}
                    value={timeSlot}
                    className="hover:bg-gradient-to-r hover:from-medical-teal/10 hover:to-medical-orange/10 focus:bg-gradient-to-r focus:from-medical-teal/10 focus:to-medical-orange/10 transition-all duration-200 rounded-lg margin-1"
                  >
                    {timeSlot}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-xs text-gray-500 font-inter mt-1">
              Each appointment is 45 minutes with professional consultation
            </p>
          </div>
        </div>

        {selectedDate && selectedTime && (
          <div className="mt-6 p-6 bg-gradient-to-r from-medical-teal/10 via-white to-medical-orange/10 rounded-xl border-2 border-medical-teal/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm">
            <div className="text-center">
              <p className="font-inter text-sm text-gray-600 mb-2 flex items-center justify-center">
                <CalendarIcon className="w-4 h-4 mr-2 text-medical-teal" />
                Your Selected Appointment
              </p>
              <p className="font-playfair text-lg font-semibold text-medical-charcoal bg-gradient-to-r from-medical-teal to-medical-deep-blue bg-clip-text text-transparent">
                {format(selectedDate, "EEEE, MMMM do, yyyy")}
              </p>
              <p className="font-inter text-md text-medical-deep-blue font-medium mt-1">
                {selectedTime}
              </p>
              <div className="w-16 h-0.5 bg-gradient-to-r from-medical-teal to-medical-orange mx-auto mt-2"></div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BookingForm;
